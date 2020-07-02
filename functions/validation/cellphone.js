export default {
    koreanCellphoneHypen: value => {
        var str = value;
        var regTel = /^(01[016789]{1}|070|02|0[3-9]{1}[0-9]{1})-?([0-9]{3,4})-?([0-9]{4})$/;

        str = str.replace(/-|\s/gi, '');

        if (!regTel.test(str)) {
            return [str, false];
        }

        str = str.replace(regTel, '$1-$2-$3');
        return [str, true];
    }
}