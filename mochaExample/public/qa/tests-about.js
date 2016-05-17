/**
 * Created by JJJ on 2016/5/17.
 */
suite('"About" Page Tests',function(){
    test('page should contain link to contact page ',function(){
        assert($('a[href="/contact"]').length);
    });
});