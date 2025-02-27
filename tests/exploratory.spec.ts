import { test,expect} from "@playwright/test";


// Test passant insertions text and click button
test("exploratory", async ({page}) => {
            await page.goto('https://exploratorytestingacademy.com/app/');
            await page.getByRole('textbox', { name: 'Text:' }).click();
            await page.getByRole('textbox', { name: 'Text:' }).fill('add');
            await page.getByRole('button', { name: 'Check For E-Prime' }).click();
            await expect (page.getByText('1')).toBeVisible();
            
 });


 // Test passant insertions be and click button

 test("Addbe", async ({page}) => {
    await page.goto('https://exploratorytestingacademy.com/app/');
    await page.getByRole('textbox', { name: 'Text:' }).click();
    await page.getByRole('textbox', { name: 'Text:' }).fill('be');
    await page.getByRole('button', { name: 'Check For E-Prime' }).click();

    await page.getByRole('paragraph').filter({ hasText: /^be$/ });
   
    await expect(page.locator('#wordCount').getByText('1')).toBeVisible(); 
    await expect(page.getByText('Discouraged Words:').getByText('1')).toBeVisible();
});    




// TESTER VERBE be au present simple , futur simple et passé simple


test("be", async ({page}) => {
    await page.goto('https://exploratorytestingacademy.com/app/');
    await page.getByRole('textbox', { name: 'Text:' }).click();
    await page.getByRole('textbox', { name: 'Text:' }).fill
    ('I am , I was ,I will be');
    await page.getByRole('button', { name: 'Check For E-Prime' }).click();
    await expect(page.getByText('I am , I was ,I will be')).toBeVisible();
    
});    



// TESTER le nombre de mots
test("beCount", async ({page}) => {
    await page.goto('https://exploratorytestingacademy.com/app/');
    await page.getByRole('textbox', { name: 'Text:' }).click();
    await page.getByRole('textbox', { name: 'Text:' }).fill('I am, I was, I will be');

    await page.getByRole('button', { name: 'Check For E-Prime' }).click();

    await expect(page.locator('#wordCount').getByText('7')).toBeVisible();
    await expect(page.getByText('Discouraged Words:').getByText('3')).toBeVisible();
   
   
});


// click link e-prime

test('test', async ({ page }) => {

    // Accède à l'URL 
    await page.goto('https://exploratorytestingacademy.com/app/');

    // Clique sur le lien ayant le rôle "link" avec le nom "e-prime"
    await page.getByRole('link', { name: 'e-prime' }).click();

    // Attend l'ouverture d'une nouvelle fenêtre (popup) après le clic
    const page1Promise = page.waitForEvent('popup');
    // Associe la nouvelle page (popup) à la variable page1 une fois ouverte
    const page1 = await page1Promise;
    
});
