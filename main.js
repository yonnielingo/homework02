$(document).ready(function () {
    $("#submitSearch").click(function () {

        // get the value from the search content box
        var apiKey = 'OOUmhUZ3zWjK8McmjN8ge20wUweRCUXD';
        var searchFor = $('#searchBox').val();
        var limitReturn = 5;
        var offsetNum = 0;
        var rating = "g";
        var defaultLang = "en";
        var url ='https://api.giphy.com/v1/gifs/search?api_key='+ apiKey +'&q='+ searchFor +'&limit='+ limitReturn +'&offset=0&rating='+ rating +'&lang='+ defaultLang;
        //alert(url);

        //api call to get images
        // $.ajax({
        //     type: "GET",
        //     url: url,
        //     success: function ( data) {
        //         $("#outputArea").text(data);
        //     }
        // });
    });
});