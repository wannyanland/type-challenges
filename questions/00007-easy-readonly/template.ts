interface Todo {
  title: string
  description: string
}

type MyReadonly<T> = { readonly [key in keyof T]: T[key]}

const test: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}

test.title = "Hello" // Error: cannot reassign a readonly property
test.description = "barFoo" // Error: cannot reassign a readonly property