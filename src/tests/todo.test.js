import { render, screen, cleanup } from "@testing-library/react";
import Todo from "../components/todo";
import renderer from "react-test-renderer";

afterEach(() => { cleanup() })

test('should render non-completed todo', () => {
    const testTodo = {
        id: 'todo-1',
        title: 'Learn testing',
        isCompleted: false
    };
    render(<Todo todo={testTodo} />);
    const todoElement = screen.getByTestId(testTodo.id)
    expect(todoElement).toBeInTheDocument()
    expect(todoElement).toHaveTextContent(testTodo.title)
    expect(todoElement).not.toContainHTML('<strike>')
})

test('should render completed todo', () => {
    const testTodo = {
        id: 'todo-2',
        title: 'Do well',
        isCompleted: true
    };
    // Just another way of querying rendered elements instead of using 'screen'
    const todoElement = render(<Todo todo={testTodo} />).queryByTestId(testTodo.id);
    expect(todoElement).toBeInTheDocument()
    expect(todoElement).toHaveTextContent(testTodo.title)
    expect(todoElement).toContainHTML('strike')
})

test('match snapshot', () => {
    const testTodo = {
        id: 'todo-2',
        title: 'Do well',
        isCompleted: true
    };
    const tree = renderer.create(<Todo todo={testTodo} />).toJSON()
    expect(tree).toMatchSnapshot()
})