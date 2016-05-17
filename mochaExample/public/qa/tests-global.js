/**
 * Created by JJJ on 2016/5/17.
 */
suite('Global Tests',function(){
    test('page has a valid title',function(){
        console.log(document.title);
        assert(document.title && document.title.match(/\S/) && document.title.toUpperCase() !=='TODO');
    });
});