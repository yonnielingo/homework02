$(document).ready(function () {
    $('#submitSearch').click(function () {

        // building the url api
        var apiKey = 'OOUmhUZ3zWjK8McmjN8ge20wUweRCUXD';
        var searchFor = $('#searchBox').val();
        var limitReturn = $('#returnQty').val();
        var offsetNum = 0;
        var rating = $('#raitings').val;
        var defaultLang = 'en';
        var url = 'https://api.giphy.com/v1/gifs/search?api_key=' + apiKey + '&q=' + searchFor + '&limit=' + limitReturn + '&offset=' + offsetNum + '&rating=' + rating + '&lang=' + defaultLang;

        //api call
        $.ajax({
            url: url,
            success: function (data) {
                console.log('success ' + data)
                var newLine = "";
                $.each(data.data, function (key, obj) {
                    var ibArray = obj.images.downsized_still.url;
                    console.log('url= ' + ibArray);
                    newLine += '<img class="gifs" src="' + ibArray + '">'
                });
                $('#outputArea').html(newLine);
            },
        });
    });
});