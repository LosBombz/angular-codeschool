(function() {
    var app = angular.module('store', []);

    var gems = [{
        name: 'Dodecahedron',
        price: 2.95,
        description: 'Bling BLing',
        canPurchase: true,
        soldOut: true,
        images: [{
            full: 'http://placehold.it/150x150',
            thumb: 'http://placehold.it/50x50'
        }, {
            full: 'http://placehold.it/150x150',
            thumb: 'http://placehold.it/50x50'
        }, {
            full: 'http://placehold.it/150x150',
            thumb: 'http://placehold.it/50x50'
        }],
        reviews: [{
            stars: 5,
            body: 'I love this product',
            author: 'gemdude@email.com'
        }]
    }, {
        name: 'Pentagonal Gem',
        price: 5.95,
        description: 'it\'s like a gem bro',
        canPurchase: false,
        images: [{
            full: 'http://placehold.it/150x150',
            thumb: 'http://placehold.it/50x50'
        }, {
            full: 'http://placehold.it/150x150',
            thumb: 'http://placehold.it/50x50'
        }, {
            full: 'http://placehold.it/150x150',
            thumb: 'http://placehold.it/50x50'
        }],
        reviews: []
    }];

    app.controller('StoreController', function() {
        this.products = gems;
    });

    app.controller('ReviewController', function() {
        this.review = {};

        this.addReview = function(product) {
            product.reviews.push(this.review);
            this.review = {};
        };

    });

    app.directive('productTitle', function() {
        return {
            restrict: 'E',
            templateUrl: 'product-title.html'
        };
    });

    app.directive('productPanels', function() {
        return {
            restrict: "E",
            templateUrl: "product-panels.html",
            controller: function() {
                this.tab = 1;

                this.selectTab = function(tab) {
                    this.tab = tab;
                };

                this.isSelected = function(tab) {
                    return this.tab === tab;
                };

            },
            controllerAs: 'panel'
        };
    });

}());
