.directive('endScroll',
        function($rootScope, $window) {
            return {
                restrict: "A",
                link: function(scope, element, attrs) {
                    element.scroll(function() {
                        var scrollWidth = element.prop('scrollWidth'),
                            elementWidth = element.width(),
                            scrollLeft = element.scrollLeft(),
                            offset = 45;
                        if (scrollLeft + elementWidth + offset == scrollWidth) {
                            scope.$apply(attrs.endScroll);
                        }
                    });
                }
            };
        }
    )
