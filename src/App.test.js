import { render, screen } from &apos;@testing-library/react&apos;;
import App from &apos;./App&apos;;

test(&apos;renders learn react link&apos;, () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
