export function getTimeBanner() {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 11) {
    return {
      title: "🌅 Morning Specials",
      subtitle: "Fresh homemade podis & breakfast favorites",
      bg: "bg-orange-50 border-orange-100",
    };
  }

  if (hour >= 11 && hour < 16) {
    return {
      title: "🍛 Lunch Time Favorites",
      subtitle: "Authentic Telugu meals prepared with care",
      bg: "bg-amber-50 border-amber-100",
    };
  }

  if (hour >= 16 && hour < 20) {
    return {
      title: "Evening Comfort Foods",
      subtitle: "Traditional flavors for your evening cravings",
      bg: "bg-orange-50 border-orange-100",
    };
  }

  return {
    title: "🌙 Fresh Preparations for Tomorrow",
    subtitle: "Homemade quality you can trust",
    bg: "bg-gray-50 border-gray-200",
  };
}