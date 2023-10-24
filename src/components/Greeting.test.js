import { render, screen } from '@testing-library/react'
import Greeting from "./Greeting"

test('Greeting이라는 텍스트 렌더링을 합니다.', () => {
    // Given
    render(<Greeting />);
    // When 렌더링

    // Then
    const GreetingElement = screen.getByText(/Greeting/); // Greeting이라는 스트링 값을 가진 screen element, 없다면 null
    expect(GreetingElement).toBeInTheDocument(); // GreetingElement가 Document 안에 있으면 true, 없으면 false
})