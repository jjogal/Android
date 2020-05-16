Java.perform(function () {
    var MainActivity = Java.use('com.example.reverzeme.ChallengeJNI');
    var v= Java.use("java.lang.Boolean").$new(false);
    MainActivity.checkIfDeviceIsEmulator.implementation = function () {
        console.log('Done: Emulator_Bypassed_jj');
		return v;
    };
});
