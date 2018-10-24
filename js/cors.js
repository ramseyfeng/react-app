$(function() {
    /*$.ajax(
        {
            url: 'http://localhost:3030/assets/languages/en.json',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log(data);
            }
        }
    );*/
    /*$.ajax(
        {
            url: 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth',
            type: 'POST',
            data: {name: 'XXX', email: 'XXX' },
            dataType: 'json',
            success: function (data) {
                console.log(data);
            }
        }
    );*/
    $.ajax(
        {
            url: '/api/load-tests?TENANTID=stormui&projectId=1',
            type: 'POST',
            data: {name: 'console'},
            dataType: 'json',
            success: function (data) {
                console.log(data);
            }
        }
    );
});

