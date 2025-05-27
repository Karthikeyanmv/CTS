
module com.utils {
    exports com.utils;
}


package com.utils;

public class Utils {
    public static void greet() {
        System.out.println("Hello from Utils!");
    }
}


module com.greetings {
    requires com.utils;
}


package com.greetings;

import com.utils.Utils;

public class Greetings {
    public static void main(String[] args) {
        Utils.greet();
    }
}
