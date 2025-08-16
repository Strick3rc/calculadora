print("Calculadora ")

num1 = float(input("Primer número: "))
num2 = float(input("Segundo número: "))

print("\nOperaciones:")
print("1. Sumar")
print("2. Restar")
print("3. Multiplicar")
print("4. Dividir")

opcion = input("Elige (1-4): ")

if opcion == "1":
    print("Resultado:", num1 + num2)
elif opcion == "2":
    print("Resultado:", num1 - num2)
elif opcion == "3":
    print("Resultado:", num1 * num2)
elif opcion == "4":
    if num2 == 0:
        print("Error: No se puede dividir por cero")
    else:
        print("Resultado:", num1 / num2)
else:
    print("Opción incorrecta")