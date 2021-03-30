import { Selector } from 'testcafe';

export default class Page {
    constructor () {
        this.userTexbox         = Selector('#userName');
        this.mailTexbox         = Selector('#userEmail');
        this.addressTexbox1     = Selector('#currentAddress');
        this.addressTexbox2     = Selector('#permanentAddress');
        this.formButton         = Selector('#submit');
    }
}