
$(function(){
        console.log("Loading countries");
        function loadCountries() {
                $.getJSON("/api/students/", function( countries ) {
                        console.log(countries);
                        var message = "Nobody is here";
                        if (countries.length > 0){
                                message = countries[0].countryName + " " + countries[0].symbolicAnimal;
                        }
                        $(".skills").text(message);
                });
        };
        loadCountries();
        setInterval(loadCountries, 2000);
});

