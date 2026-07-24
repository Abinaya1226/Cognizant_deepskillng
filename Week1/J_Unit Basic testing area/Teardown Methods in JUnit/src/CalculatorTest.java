package com.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CalculatorTest {

    private Calculator calculator;

    // Setup Method
    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup: Calculator object created.");
    }

    // Test using AAA Pattern
    @Test
    public void testAddition() {

        // Arrange
        int num1 = 10;
        int num2 = 20;

        // Act
        int result = calculator.add(num1, num2);

        // Assert
        assertEquals(30, result);
    }

    // Teardown Method
    @After
    public void tearDown() {
        calculator = null;
        System.out.println("Teardown: Calculator object destroyed.");
    }
}
