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
    it('should return 0 orders for dan', () => {
      assert.equal(subject.getOrderCountForUser('dan'), 0, 'number of users incorrect');
    });
  });
  
  describe('getOrderCountForProduct', () => {
    it('should return 1 orders for toothbrush', () => {
      assert.equal(subject.getOrderCountForProduct('toothbrush'), 1, 'number of toothbrush orders incorrect');
    });
    it('should return 2 orders for hammer', () => {
      assert.equal(subject.getOrderCountForProduct('hammer'), 2, 'number of hammer orders incorrect');
    });
    it('should return 1 orders for spoon', () => {
      assert.equal(subject.getOrderCountForProduct('spoon'), 1, 'number of spoon orders incorrect');
    });
    it('should return 3 orders for chair', () => {
      assert.equal(subject.getOrderCountForProduct('chair'), 3, 'number of chair orders incorrect');
    });
    it('should return 0 orders for donkey', () => {
      assert.equal(subject.getOrderCountForProduct('donkey'), 0, 'number of donkey orders incorrect');
    });
  });

  describe('getCustomerNamesForProduct', () => {
    it('should return sam for toothbrush', () => {
      assert.deepEqual(subject.getCustomerNamesForProduct('toothbrush'), ['sam'], 'customer name didnt match');
    });
    it('should return bob & sam for hammer', () => {
      assert.deepEqual(subject.getCustomerNamesForProduct('hammer'), ['bob', 'sam'], 'customer name didnt match');
    });
    it('should return sam for spoon', () => {
      assert.deepEqual(subject.getCustomerNamesForProduct('spoon'), ['sam'], 'customer name didnt match');
    });
    it('should return bob & sue for chair', () => {
      assert.deepEqual(subject.getCustomerNamesForProduct('chair'), ['bob', 'sue'], 'customer name didnt match');
    });
    it('should return no names for monkey', () => {
      assert.deepEqual(subject.getCustomerNamesForProduct('monkey'), [], 'customer name didnt match');
    });
  });

  describe('getMostPopularProduct', () => {
    it('should return chair', () => {
      assert.deepEqual(subject.getMostPopularProduct(), ['chair'], 'most popular product incorrect');
    });
  });

});