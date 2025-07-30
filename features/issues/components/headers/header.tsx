import HeaderNav from './HeaderNav';
import HeaderOptions from './HeaderOptions';

export default function Header(): React.JSX.Element {
   return (
      <div className="w-full flex flex-col items-center">
         <HeaderNav />
         <HeaderOptions />
      </div>
   );
}
