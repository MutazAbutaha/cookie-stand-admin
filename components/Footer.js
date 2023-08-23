export default function Footer({CookieStands}) {
    return (
      <footer className="p-4 text-center text-black bg-green-100">
        <p>{CookieStands.length} Locations World Wide</p>
        &copy; mutaz
      </footer>
    );
}