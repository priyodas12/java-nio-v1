package io.javalab.interfaces;

public interface DefaultMethodInterface {
    public default void defaultMethod(){
        System.out.println("default interface implementation...");
    }
}
