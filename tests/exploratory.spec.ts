import { test,expect} from "@playwright/test";


    async function navigateToApp(page) {
     await page.goto('https://exploratorytestingacademy.com/app/');
 }
 
 async function fillTextBox(page, text) {
     await page.getByRole('textbox', { name: 'Text:' }).click();
     await page.getByRole('textbox', { name: 'Text:' }).fill(text);
 }
 
 async function clickCheckButton(page) {
     await page.getByRole('button', { name: 'Check For E-Prime' }).click();
 }
 
 // Test passant insertions text and click button
 test("insertions", async ({ page }) => {
     await navigateToApp(page);
     await fillTextBox(page, 'add');
     await clickCheckButton(page);
     await expect(page.getByText('1')).toBeVisible();
 });
 
 // Test passant insertions be and click button
 test("Add be", async ({ page }) => {
     await navigateToApp(page);
     await fillTextBox(page, 'be');
     await clickCheckButton(page);
     await page.getByRole('paragraph').filter({ hasText: /^be$/ });
     await expect(page.locator('#wordCount').getByText('1')).toBeVisible();
     await expect(page.getByText('Discouraged Words:').getByText('1')).toBeVisible();
 });
 
 // TESTER VERBE be au present simple, futur simple et passé simple

 test("be", async ({ page }) => {
     await navigateToApp(page);
     await fillTextBox(page, 'I am , I was ,I will be');
     await clickCheckButton(page);
     await expect(page.getByText('I am , I was ,I will be')).toBeVisible();
 });
 


 // TESTER le nombre de mots
 test("be Count", async ({ page }) => {
     await navigateToApp(page);
     await fillTextBox(page, 'I am, I was, I will be');
     await clickCheckButton(page);
     await expect(page.locator('#wordCount').getByText('7')).toBeVisible();
     await expect(page.getByText('Discouraged Words:').getByText('3')).toBeVisible();
 });
 

 // click link e-prime
 test('test Link', async ({ page }) => {
     await navigateToApp(page);
     await page.getByRole('link', { name: 'e-prime' }).click();

    // On attend qu'une popup s'ouvre et on stocke cette attente dans une promesse.
     const page1Promise = page.waitForEvent('popup');

     // On attend que la popup s'ouvre réellement, puis on la récupère pour pouvoir l'utiliser.
     const page1 = await page1Promise;
 });



 // Cas non passant
 test("no Passant", async ({ page }) => {
        await navigateToApp(page);
        await fillTextBox(page, '%');
        await clickCheckButton(page);

         await expect(page.getByText('%')).toBeVisible();
      
});