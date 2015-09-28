
products = new Meteor.Collection('products');// collection products
categories = new Meteor.Collection('categories');// collection categories
shops = new Meteor.Collection('shops');
parent_tags = new Meteor.Collection('parent_tags');
tags = new Meteor.Collection('tags');
stats = new Mongo.Collection('stats');

images = new FS.Collection("images", {
    stores: [new FS.Store.FileSystem("images", {path: "/Users/tnc/Documents/safir/upload"})]
});

attribute = new Mongo.Collection('attribute');

parentattr = new Mongo.Collection('parentattr');
users = Meteor.users;
cart=new Mongo.Collection('cart');
contents = new Meteor.Collection('contents');
contents_type = new Meteor.Collection('contents_type');