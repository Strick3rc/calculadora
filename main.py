def calcular():
    print("\n--- CALCULADORA ---")
    num1 = float(input("Primer número: "))
    num2 = float(input("Segundo número: "))
    
    print("\nOperaciones:")
    print("1. Suma")
    print("2. Resta")
    print("3. Multiplicación")
    print("4. División")
    
    opcion = input("Elige (1-4): ")
    
    if opcion == "1":
        print(f"Resultado: {num1 + num2}")
    elif opcion == "2":
        print(f"Resultado: {num1 - num2}")
    elif opcion == "3":
        print(f"Resultado: {num1 * num2}")
    elif opcion == "4":
        print(f"Resultado: {num1 / num2}" if num2 != 0 else "Error: División por cero")
    else:
        print("Opción inválida")

if __name__ == "__main__":
    calcular()