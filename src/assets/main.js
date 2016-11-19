$(function() {
  $.ajax({
      url: 'https://www.codeschool.com/users/924450.json',
      dataType: 'jsonp',
      success: function(response) {
        // handle response
        response.courses.completed.forEach(elem => {
          $('#badges').append(`<div class='course'>
            <h3>${elem.title}</h3>
            <img src='${elem.badge}'/>
            <a href='${elem.url}' target='_blank' class='btn btn-primary'>See Course</a>
          </div>`)
        });
      }
    });
});
