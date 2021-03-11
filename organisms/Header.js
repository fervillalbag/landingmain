
import { useState } from 'react'
import Button from '../atoms/Button'
import Image from '../atoms/Image'
import ToggleBtn from '../atoms/ToggleBtn'
import Brand from '../molecules/Brand'
import HeaderNav from '../molecules/HeaderNav'
import { colors } from '../settings/colors'

export default function Header() {

  const [isActive, setIsActive] = useState(false);
  const handleClick = () => setIsActive(!isActive)

  return (
    <nav>
      <div>
        <Brand
          href={`/`}
          src={`logo.svg`}
          alt={`Logo de la Empresa`}
        />
        <main className={isActive && 'active'}>
          <HeaderNav />
        </main>
        <aside>
          <Button>Get Started</Button>
        </aside>
        <div className="bars">
          <ToggleBtn handleClick={handleClick}>
            <Image src={isActive
              ? 'icon-close.svg'
              : 'icon-hamburger.svg'}
              alt="Toggle Btn"
            />
          </ToggleBtn>
        </div>
      </div>

      <style jsx>{`
        nav {
          height: 10rem;
        }

        div {
          max-width: 1100px;
          width: 90%;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
        }

        @media screen and (max-width: 768px) {
          aside {
            display: none;
          }
        }

        .bars {
          display: none;
        }

        @media screen and (max-width: 680px) {
          .bars {
            display: flex;
            justify-content: flex-end;
          }
          
          main {
            position: fixed;
            top: 10rem;
            left: 50%;
            transform: translateX(-50%) translateY(1100px);
            width: 80%;
            padding: 3rem 0;
            background-color: ${colors.VaryLightGray};
            transition: all 300ms ease;

            -webkit-box-shadow: 5px 5px 7px 0px rgba(0,0,0,0.2);
            -moz-box-shadow: 5px 5px 7px 0px rgba(0,0,0,0.2);
            box-shadow: 5px 5px 7px 0px rgba(0,0,0,0.2);
          }

          main.active {
            transform: translateX(-50%) translateY(0);
          }
        }
      `}</style>
    </nav>
  )
}
