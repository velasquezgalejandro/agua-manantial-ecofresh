import '@testing-library/jest-dom'

// Este archivo registra los matchers:
// toBeInTheDocument()
// toHaveTextContent()
// toBeVisible()
// toHaveAttribute()
// etc.
// Sin este import, Vitest no sabe qué es toBeInTheDocument.
// IMPORTANTE PARA VISUALIZAR LOS TESTS QUE USAN RTL (REACT TESTING LIBRARY)