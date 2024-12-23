import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Twitter, SendHorizonal } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 items-center justify-center gap-8 ">
          {/* Exclusive Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Exclusive</h2>
            <p>Subscribe</p>
            <p className="text-sm">Get 10% off your first order</p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-gray-600"
              />
              <Button size="icon">
                <SendHorizonal className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Support</h2>
            <p className="text-sm">111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.</p>
            <p className="text-sm">exclusive@gmail.com</p>
            <p className="text-sm">+88015-88888-9999</p>
          </div>

          {/* Account Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Account</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/account">My Account</Link></li>
              <li><Link href="/login">Login / Register</Link></li>
              <li><Link href="/cart">Cart</Link></li>
              <li><Link href="/wishlist">Wishlist</Link></li>
              <li><Link href="/shop">Shop</Link></li>
            </ul>
          </div>

          {/* Quick Link Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Quick Link</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms Of Use</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

        </div>

        {/* Social Links & Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© Copyright Universal Mart 2025. All right reserved</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-gray-300">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

