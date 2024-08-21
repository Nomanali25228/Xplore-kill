import React from 'react'

export default function Footer() {
    var todaydate = new Date
    var fullYear = todaydate.getFullYear()
    return (
        <div>
            <section className="footer">
                <hr />
                <h4>About Us</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi
                    Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae dolorem.
                </p>

                <div className="icons">
                    <a href="https://www.facebook.com/profile.php?id=100083766049054" target='blaank'> <i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/noman_nomi_102/" target='blaank'><i className="fab fa-instagram"></i></a>
                    <a href="https://github.com/Nomanali25228" target='blaank'><i className="fab fa-twitter"></i></a>
                    <a href="https://github.com/Nomanali25228" target='blaank'> <i className="fab fa-linkedin"></i></a>
                </div>
                <p>Made with <i className="fas fa-heart"></i> by <a href="/">Noman Developer</a></p>
                <p>Copyright &copy; {fullYear}  <a href="https://github.com/Nomanali25228" target='blaank'>Noman</a> All Rights Reserved</p>
            </section>
        </div>
    );
}
