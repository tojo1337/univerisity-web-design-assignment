$(document).ready(()=>{
    $("#sample-search").hide();
    $("#sample-search-toggle").click(setTimeout(()=>{
        $("sample-search").show();
    },2000));
});