import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";


test("should display 'No incidents found' when list is empty", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ incidents: [] }),
    })
  );

  const { getByText } = render(<App />);

  // 切换到 "List all incidents" 页签
  fireEvent.click(getByText(/list all incidents/i));

  // 点击 "Get List" 按钮
  fireEvent.click(getByText(/Get Incidents List/i));

  // 验证空状态消息
  const noIncidentsMessage = await screen.findByText(/no incidents found/i);
  expect(noIncidentsMessage).toBeInTheDocument();
});

