import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils';
import Greeting from "./Greeting"

describe('Greeting Component', () => {
    test('버튼이 클릭 되었을 때, 바뀌었습니다 가 텍스트 렌더링이 일어난다.', () => {
        // Given
        render(<Greeting />);
        // When
        const buttonElement = screen.getByRole('button');
        act(() => userEvent.click(buttonElement)) // 사용자 인터랙션 감지 act
        // Then
        const outputElement = screen.getByText(/바뀌었습니다/);
        expect(outputElement).toBeInTheDocument();
    });

    test('버튼이 클릭되었을 때, 아직 바뀌기 전입니다 가 텍스트 렌더링이 일어나지 않는다.', () => {
        // Given
        render(<Greeting />);
        // When
        const buttonElement = screen.getByRole('button');
        act(() => userEvent.click(buttonElement));
        // Then
        const outputElement = screen.queryByText(/아직 바뀌기 전입니다/);
        expect(outputElement).toBeNull();
    })





    //     test('Greeting이라는 텍스트 렌더링을 합니다.', () => {
    //         // Given
    //         render(<Greeting />);
    //         // When 렌더링

    //         // Then
    //         const GreetingElement = screen.getByText(/Greeting/); // Greeting이라는 스트링 값을 가진 screen element, 없다면 null
    //         expect(GreetingElement).toBeInTheDocument(); // GreetingElement가 Document 안에 있으면 true, 없으면 false
    //     });

    //     test('만나서 반갑습니다 라는 텍스트 렌더링을 합니다.', () => {
    //         // Given
    //         render(<Greeting />);
    //         // When 렌더링

    //         // Then
    //         const HelloElement = screen.getByText(/만나서 반갑습니다/);
    //         expect(HelloElement).toBeInTheDocument();
    //     });

    //     test('안녕하세요 라는 텍스트 렌더링을 합니다.', () => {
    //         // Given
    //         render(<Greeting />);
    //         // When 렌더링

    //         // Then
    //         const HelloElement = screen.getByText(/안녕하세요/);
    //         expect(HelloElement).toBeInTheDocument();
    //     })
})

