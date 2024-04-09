import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

Given('I have the number {string}', function (string) {
  this.setFirstOperand(string);
});

When('I add it to the number {string}', function (string) {
  this.addTo(string);
});

Then('the result should be the number {string}', function (string) {
  expect(this.result).to.eql(string); 
});
