function maggielana(cb){
    console.log("maggie aa gayi...");
    setTimeout(() => {
        console.log("maggie aa gayi");
        cb(maggiekhana);
        
    },2000);

    }
    function maggiebanana(cb){
        console.log("maggei banana start...");
        setTimeout(() => {
            console.log("maggie ban gaye...");
            cb(maggiekhana);
        },2000);
    }

        function maggiebanana(cb) {
            console.log("maggie banana start...");
            setTimeout(() => {
                console.log("maggie ban gayi...");
                cb();
            } ,2000);

            }
            function maggiekhana(cb){
                console.log("maggie khana start...");
                setTimeout(() => {
                    console.log("maggie khatam");

                },2000)}

            maggielana(maggiebanana)
        
        
    