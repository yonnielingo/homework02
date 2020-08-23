$(function () {
    $('#submitSearch').on('click', function () {
        // get the value from the search content box
        // var searchQ = $('#searchBox').val();
        // alert(searchQ);

        //api call to get images
        $.ajax({
            type: "GET",
            url: "https://api.giphy.com/v1/gifs/search?api_key=OOUmhUZ3zWjK8McmjN8ge20wUweRCUXD&q=FJ Cruiser&limit=5&offset=0&rating=g&lang=en",
            success: function ( data) {
                console.log( data)
            }
        });
        $('#outputArea').html( data);
    });

});