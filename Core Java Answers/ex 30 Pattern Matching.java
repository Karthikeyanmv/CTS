public class PatternMatchingSwitch {
    public static void identifyObject(Object obj) {
        String result = switch (obj) {
            case Integer i -> "Integer with value " + i;
            case String s -> "String with value " + s;
            case Double d -> "Double with value " + d;
            default -> "Unknown type";
        };
        System.out.println(result);
    }

    public static void main(String[] args) {
        identifyObject(10);
        identifyObject("Hello");
        identifyObject(3.14);
        identifyObject(true);
    }
}
