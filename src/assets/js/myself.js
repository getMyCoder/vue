var daT=[0]
// function  getAjax(){
  // $http({
  //   url : './static/json/json.json',
  //   method: 'get',
  //   headers: {'X-Requested-With': 'XMLHttpRequest'},
  // }).then(function (response) {
  //   console.log(response.data.name);
  //   daT=response.data.name;
  // }).catch(function (error) {
  //   console.log(error);
  // });
  $.ajax({
    type:"get",
    url:"./static/json/json.json",
    success:function (response) {
      // daT=response.name
      console.log(response.name);
      daT= response.name;
    }
  })
// }
export  {
  daT
}





