/*Find max element in an given array
[1,4,2,5,3]

max=5

let max=very less number(-1)
i=0 => a[0]>max max=a[0] max = 1
i=1 => a[1]>max max=a[1] max = 4
i=2 => a[2]>max max = 4
i=3 =>  a[3]>max max= a[3] max=5
i=4=> a[4]>max max = 5*/
var utility = {
    a: [-4, -2, -5, -8],
    maxInt: function () {
        var max = a[0];
        for (i = 1; i < a.length; i++) {
            if (a[i] > max) {
                max = a[i];
            }
        }
    },
    minInt: function () {
        var min = Number.MAX_SAFE_INTEGER;
        for (i = 0; i < a.length; i++) {
            if (a[i] < min) {
                min = a[i];
            }
        }
    }
}

utility.maxInt();
utility.a=[2,3,4,3];
