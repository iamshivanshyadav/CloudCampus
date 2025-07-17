import { GraduationCap, TvMinimalPlay, Menu, X, Search, Bell } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/auth-context";
import { motion, AnimatePresence } from "framer-motion";

function StudentViewCommonHeader() {
  const navigate = useNavigate();
  const { resetCredentials } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleLogout() {
    resetCredentials();
    sessionStorage.clear();
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header 
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <motion.div 
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/home" className="flex items-center group">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg mr-3 group-hover:shadow-lg transition-shadow">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="font-extrabold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                CloudCampus
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Button
              variant="ghost"
              onClick={() => {
                location.pathname.includes("/courses")
                  ? null
                  : navigate("/courses");
              }}
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Explore Courses
            </Button>
            
            <motion.div
              onClick={() => navigate("/student-courses")}
              className="flex cursor-pointer items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <TvMinimalPlay className="w-5 h-5" />
              <span className="font-medium">My Courses</span>
            </motion.div>
            
            <Button 
              onClick={handleLogout}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium px-6 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Sign Out
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-3 space-y-3">
              <Button
                variant="ghost"
                onClick={() => {
                  location.pathname.includes("/courses")
                    ? null
                    : navigate("/courses");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full justify-start text-gray-700 hover:text-purple-600 font-medium"
              >
                Explore Courses
              </Button>
              
              <Button
                variant="ghost"
                onClick={() => {
                  navigate("/student-courses");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full justify-start text-gray-700 hover:text-purple-600 font-medium"
              >
                <TvMinimalPlay className="w-5 h-5 mr-2" />
                My Courses
              </Button>
              
              <Button 
                onClick={() => {
                  handleLogout();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium"
              >
                Sign Out
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default StudentViewCommonHeader;
