var assert = require('assert');
var subject = require('./service');

describe('service.js', function() {

  describe('getOrderCountForUser', () => {
    it('should return 3 orders for sam', () => {
      assert.equal(subject.getOrderCountForUser('sam'), 3, 'number of users incorrect');
    });
    it('should return 3 orders for bob', () => {
      assert.equal(subject.getOrderCountForUser('bob'), 3, 'number of users incorrect');
    });
    it('should return 1 orders for sue', () => {
      assert.equal(subject.getOrderCountForUser('sue'), 1, 'number of users incorrect');
    });
  });
  
  describe('getOrderCountForProduct', () => {
    it('should return 2 orders for hammer', () => {
      assert.equal(subject.getOrderCountForProduct('hammer'), 2, 'number of hammer orders incorrect');
    });
  });

  describe('getCustomerNamesForProduct', () => {
    it('should return bob & sue for chair', () => {
      assert.deepEqual(subject.getCustomerNamesForProduct('chair'), ['bob', 'sue'], 'customer name didnt match');
    });
  });

  describe('getMostPopularProduct', () => {
    it('should return chair', () => {
      assert.deepEqual(subject.getMostPopularProduct(), ['chair'], 'most popular product incorrect');
    });
  });

});