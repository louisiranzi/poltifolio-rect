export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 text-white text-center h-160 flex flex-col bg-gradient-to-r from-blue-500 to-indigo-700"
    >
      <h2 className="text-3xl font-bold mb-6 text-yellow-500">Contact Me</h2>

      <form
        action="https://formspree.io/f/xrbanydl"
        method="POST"
        className="max-w-md mx-auto space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded text-white bg-transparent border-white"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border rounded text-white bg-transparent border-white"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full px-4 py-2 border rounded h-32 text-white bg-transparent border-white"
          required
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500"
        >
          <abbr title="click to send your information">Send Message</abbr>
        </button>
      </form>
    </section>
  );
}
