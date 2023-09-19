import "./rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src="/images/facebook.png" alt="aaa" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src="/images/twitter.png" alt="aaa" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src="/images/instagram.png" alt="aaa" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/images/logo.png" alt="" />
      </section>
      <section>
        <p>Desenvolvido por Alura.</p>
      </section>
    </footer>
  );
};

export default Rodape;
