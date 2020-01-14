/**
 * 选择排序
 */
var selectSort = function (a) {
    var n = a.length;
    if (n <= 1)
        return;
    for (var i = 0; i < n - 1; i++) {
        var minKey = i;
        for (var j = i; j < n - 1; j++) {
            if (a[j + 1] < a[j]) {
                minKey = j + 1;
            }
            else {
                break;
            }
        }
        var tmp = a[i];
        a[i] = a[minKey];
        a[minKey] = tmp;
        console.log(i, a);
    }
    console.log(a);
};
console.log(selectSort([4, 3, 2, 1]));
