const {validarSenha, validarFormulario} = require('./senha')

it('Testando se a senha é valida', () => {
    expect(validarSenha("Senha38@")).toBe(true)
})

it('Testando se a senha não tem 8 caracteres', () => {
    expect(validarSenha("Senha1!")).toBe(false)
})

it('Testando se a senha não tem letra maiúscula', () => {
    expect(validarSenha("senha12!")).toBe(false)
})

it('Testando se a senha não tem caracteres especiais', () => {
    expect(validarSenha("Senha123")).toBe(false)
})

it('Testando se a senha não tem números', () => {
    expect(validarSenha("Senhaaa!")).toBe(false)
})

it('Testando se a senha se coincide', () => {
    expect(validarFormulario("Senha38@", "Senha38@")).toBe(true)
})

it('Testando se a senha não coincide', () => {
    expect(validarFormulario("Senha38@", "Senha25!")).toBe(false)
})