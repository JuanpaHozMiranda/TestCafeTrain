import Page from './Page';
//import XPathSelector from './xpath-selector';
//import { expect } from 'chai';

fixture `MyFixture`
  .page `https://demoqa.com/text-box`;

//Page-model
const page = new Page();
//const firstCheckbox  = XPathSelector('//input[@type="checkbox"]');

test('My first test', async t =>{
  await t
    console.log('Primer ejercicio XD')
});

test('My Second test', async t =>{
  await t.debug();
  await t
    .typeText(page.userTexbox, 'John Smith').expect(page.userTexbox.value).eql('John Smith')
    .typeText(page.mailTexbox, 'fulano@gmail.com').expect(page.mailTexbox.value).eql('fulano@gmail.com')
    .typeText(page.addressTexbox1, 'calle 123').expect(page.addressTexbox1.value).eql('calle 123')
    .typeText(page.addressTexbox2, 'calle 123').expect(page.addressTexbox2.value).eql('calle 123')
    .click(page.formButton)
    .wait(5000);

  //await t.eval(() => location.reload(true));
  //await t.expect(page.userTexbox.value).eql('');
});