import '@testing-library/jest-dom'
import 'fake-indexeddb/auto'

// Este archivo registra los matchers:
// toBeInTheDocument()
// toHaveTextContent()
// toBeVisible()
// toHaveAttribute()
// etc.
// Sin este import, Vitest no sabe qué es toBeInTheDocument.
// IMPORTANTE PARA VISUALIZAR LOS TESTS QUE USAN RTL (REACT TESTING LIBRARY) jest-dom

// IMPORTANTE PARA VISUALIZAR LOS TESTS QUE USAN indexed (REACT TESTING LIBRARY) fake-indexeddb (mirar creación de indexedDB en tests)
