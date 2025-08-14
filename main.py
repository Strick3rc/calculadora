print("calculadora ")
a = float(input("Primer número: "))
b = float(input("Segundo número: "))

print("1. Sumar")
print("2. Restar")
op = input("Opción: ")

if op == "1":
    print("Resultado:", a + b)
elif op == "2":
    print("Resultado:", a - b)
else:
    print("Opción inválida")