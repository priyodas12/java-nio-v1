package io.javalab.interfaces;


public class DefaultMethodInterfaceImpl implements DefaultMethodInterface {

    @Override
    public void defaultMethod() {
        System.out.println("default method overridden...");
    }

    public static void main(String[] args) {
        new DefaultMethodInterfaceImpl().defaultMethod();
    }
}
