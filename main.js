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
        var str = "";
        $.getJSON( url,function(data ) {
            console.log(data)
            var myData = data;
            $.each(data, function( myData, obj) {
                str += '<div class="box"><img src="' + obj.url + '" alt="'+ obj.slug + '"/></div>\n';
                console.log('str='+str)
            })
            console.log('str:\n'+str);
            $('#outputArea').html(str);
        } )


        //earlier attempt:
        // api call to get images
        // $.ajax({
        //     type: "GET",
        //     url: url,
        //     success: function ( data) {
        //         console.log(data)
        //         $("#outputArea").html(data);
        //         alert(data);
        //     }
        // });
    });
});