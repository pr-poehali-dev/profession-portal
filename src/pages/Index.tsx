import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [showLogin, setShowLogin] = useState(false);
  const [newsItems, setNewsItems] = useState([
    {
      id: 1,
      title: 'Фестиваль профессий-2024: новые возможности для молодежи',
      date: '25 июля 2024',
      image: '/img/556c47cc-2f14-4a26-a053-c0bfa23038d4.jpg',
      content: 'Краевой кадровый центр объявляет о проведении масштабного Фестиваля профессий в Ставропольском крае. Мероприятие направлено на профориентацию молодежи и знакомство с востребованными специальностями региона.',
      tags: ['Фестиваль', 'Молодежь', 'Профориентация']
    },
    {
      id: 2,
      title: 'Встреча с работодателями: возможности трудоустройства',
      date: '20 июля 2024',
      image: '/img/61d87afd-4f8c-47e4-86f6-0fdf7b90bd6c.jpg',
      content: 'Состоялась встреча представителей ведущих предприятий края с выпускниками учебных заведений. Обсуждались вакансии и перспективы развития карьеры в различных отраслях экономики.',
      tags: ['Работодатели', 'Карьера', 'Трудоустройство']
    }
  ]);
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Ярмарка вакансий "Мой выбор"',
      date: '15 августа 2024',
      time: '10:00 - 16:00',
      location: 'г. Ставрополь, Дворец культуры',
      description: 'Крупнейшая ярмарка вакансий региона с участием более 50 работодателей',
      participants: 250,
      type: 'Ярмарка вакансий'
    },
    {
      id: 2,
      title: 'Профориентационный квест "Дорога к успеху"',
      date: '22 августа 2024',
      time: '14:00 - 17:00',
      location: 'г. Пятигорск, Молодежный центр',
      description: 'Интерактивный квест для школьников по знакомству с профессиями будущего',
      participants: 120,
      type: 'Квест'
    }
  ]);
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    role: 'visitor',
    message: ''
  });
  const [newsForm, setNewsForm] = useState({
    title: '',
    content: '',
    tags: '',
    image: ''
  });
  const [eventForm, setEventForm] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    type: '',
    participants: 0
  });



  const contacts = [
    {
      department: 'Отдел профориентации',
      phone: '+7 (8652) 123-456',
      email: 'prof@stavkadry.ru',
      responsible: 'Иванова Елена Петровна'
    },
    {
      department: 'Отдел работы с работодателями',
      phone: '+7 (8652) 789-012',
      email: 'employers@stavkadry.ru',
      responsible: 'Петров Сергей Александрович'
    }
  ];

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    console.log('Заявка отправлена:', applicationForm);
    alert('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
    setApplicationForm({
      name: '',
      email: '',
      phone: '',
      organization: '',
      role: 'visitor',
      message: ''
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginForm.username === 'admin' && loginForm.password === 'kkc2024') {
      setIsAdmin(true);
      setShowLogin(false);
      alert('Вход в административную панель выполнен успешно!');
    } else {
      alert('Неверные данные для входа!');
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setLoginForm({ username: '', password: '' });
  };

  const handleAddNews = (e) => {
    e.preventDefault();
    const newNews = {
      id: Date.now(),
      title: newsForm.title,
      content: newsForm.content,
      date: new Date().toLocaleDateString('ru-RU'),
      image: newsForm.image || '/img/556c47cc-2f14-4a26-a053-c0bfa23038d4.jpg',
      tags: newsForm.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
    };
    setNewsItems([newNews, ...newsItems]);
    setNewsForm({ title: '', content: '', tags: '', image: '' });
    alert('Новость успешно добавлена!');
  };

  const handleDeleteNews = (id) => {
    if (confirm('Удалить эту новость?')) {
      setNewsItems(newsItems.filter(news => news.id !== id));
    }
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    const newEvent = {
      id: Date.now(),
      title: eventForm.title,
      date: eventForm.date,
      time: eventForm.time,
      location: eventForm.location,
      description: eventForm.description,
      type: eventForm.type,
      participants: parseInt(eventForm.participants) || 0
    };
    setEvents([...events, newEvent]);
    setEventForm({ title: '', date: '', time: '', location: '', description: '', type: '', participants: 0 });
    alert('Мероприятие успешно добавлено!');
  };

  const handleDeleteEvent = (id) => {
    if (confirm('Удалить это мероприятие?')) {
      setEvents(events.filter(event => event.id !== id));
    }
  };
  };

  return (
    <div className="min-h-screen bg-government-gray">
      {/* Header */}
      <header className="bg-primary text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              {/* Работа России брендинг */}
              <div className="flex items-center space-x-3">
                <img 
                  src="/img/f92b67ea-3446-4ae3-98e7-66be92e18797.jpg" 
                  alt="Работа России"
                  className="h-12 w-auto object-contain bg-white rounded px-2 py-1"
                />
                <div className="border-l border-white border-opacity-30 pl-4">
                  <div className="text-sm font-semibold mb-1" style={{ fontFamily: 'PT Sans, sans-serif' }}>
                    Работа России
                  </div>
                  <div className="text-xs opacity-75" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    Федеральная служба занятости
                  </div>
                </div>
              </div>
              
              {/* ККЦ брендинг */}
              <div className="flex items-center space-x-4">
                <Icon name="Building2" size={32} />
                <div>
                  <h1 className="text-2xl font-bold" style={{ fontFamily: 'PT Sans, sans-serif' }}>
                    Профориентационная витрина
                  </h1>
                  <p className="text-sm opacity-90">Ставропольский край</p>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={20} />
                <span className="text-sm">Краевой кадровый центр</span>
              </div>
              {isAdmin ? (
                <Button variant="outline" size="sm" onClick={handleLogout} className="text-white border-white hover:bg-white hover:text-primary">
                  <Icon name="LogOut" size={16} className="mr-1" />
                  Выйти
                </Button>
              ) : (
                <Button variant="outline" size="sm" onClick={() => setShowLogin(true)} className="text-white border-white hover:bg-white hover:text-primary">
                  <Icon name="Lock" size={16} className="mr-1" />
                  Админ
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="news" className="space-y-8">
          <TabsList className={`grid w-full ${isAdmin ? 'grid-cols-4' : 'grid-cols-3'} lg:w-2/3 mx-auto`}>
            <TabsTrigger value="news" className="flex items-center space-x-2">
              <Icon name="Newspaper" size={16} />
              <span>Новости</span>
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center space-x-2">
              <Icon name="Calendar" size={16} />
              <span>Фестиваль профессий</span>
            </TabsTrigger>
            <TabsTrigger value="contacts" className="flex items-center space-x-2">
              <Icon name="Phone" size={16} />
              <span>Контакты</span>
            </TabsTrigger>
            {isAdmin && (
              <TabsTrigger value="admin" className="flex items-center space-x-2">
                <Icon name="Settings" size={16} />
                <span>Админка</span>
              </TabsTrigger>
            )}
          </TabsList>

          {/* News Tab */}
          <TabsContent value="news" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: 'PT Sans, sans-serif' }}>
                Информационно-новостная лента
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                Актуальные новости о профориентационных мероприятиях в Ставропольском крае
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              {newsItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Badge variant="secondary" className="bg-government-orange text-white">
                        {item.date}
                      </Badge>
                      {isAdmin && (
                        <Button 
                          size="sm" 
                          variant="destructive" 
                          onClick={() => handleDeleteNews(item.id)}
                          className="h-6 w-6 p-0"
                        >
                          <Icon name="X" size={12} />
                        </Button>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-primary" style={{ fontFamily: 'PT Sans, sans-serif' }}>
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      {item.content}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: 'PT Sans, sans-serif' }}>
                Фестиваль профессий
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                Предстоящие профориентационные мероприятия в хронологическом порядке
              </p>
            </div>

            <div className="grid gap-6">
              {events.map((event) => (
                <Card key={event.id} className="overflow-hidden relative">
                  <CardContent className="p-6">
                    {isAdmin && (
                      <Button 
                        size="sm" 
                        variant="destructive" 
                        onClick={() => handleDeleteEvent(event.id)}
                        className="absolute top-4 right-4 h-8 w-8 p-0"
                      >
                        <Icon name="X" size={14} />
                      </Button>
                    )}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge className="bg-government-orange text-white">
                            {event.type}
                          </Badge>
                          <span className="text-sm text-gray-500">{event.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-2" style={{ fontFamily: 'PT Sans, sans-serif' }}>
                          {event.title}
                        </h3>
                        <p className="text-gray-600 mb-3" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                          {event.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Icon name="Clock" size={16} />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="MapPin" size={16} />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="Users" size={16} />
                            <span>{event.participants} участников</span>
                          </div>
                        </div>
                      </div>
                      <div className="lg:ml-6">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="w-full lg:w-auto bg-government-orange hover:bg-government-orange/90">
                              <Icon name="UserPlus" size={16} className="mr-2" />
                              Подать заявку
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-md">
                            <DialogHeader>
                              <DialogTitle style={{ fontFamily: 'PT Sans, sans-serif' }}>
                                Заявка на участие
                              </DialogTitle>
                            </DialogHeader>
                            <form onSubmit={handleSubmitApplication} className="space-y-4">
                              <div>
                                <Label htmlFor="name">ФИО *</Label>
                                <Input
                                  id="name"
                                  required
                                  value={applicationForm.name}
                                  onChange={(e) => setApplicationForm({...applicationForm, name: e.target.value})}
                                />
                              </div>
                              <div>
                                <Label htmlFor="email">Email *</Label>
                                <Input
                                  id="email"
                                  type="email"
                                  required
                                  value={applicationForm.email}
                                  onChange={(e) => setApplicationForm({...applicationForm, email: e.target.value})}
                                />
                              </div>
                              <div>
                                <Label htmlFor="phone">Телефон *</Label>
                                <Input
                                  id="phone"
                                  required
                                  value={applicationForm.phone}
                                  onChange={(e) => setApplicationForm({...applicationForm, phone: e.target.value})}
                                />
                              </div>
                              <div>
                                <Label htmlFor="organization">Организация</Label>
                                <Input
                                  id="organization"
                                  value={applicationForm.organization}
                                  onChange={(e) => setApplicationForm({...applicationForm, organization: e.target.value})}
                                />
                              </div>
                              <div>
                                <Label htmlFor="role">Тип участия</Label>
                                <select
                                  id="role"
                                  className="w-full p-2 border rounded-md"
                                  value={applicationForm.role}
                                  onChange={(e) => setApplicationForm({...applicationForm, role: e.target.value})}
                                >
                                  <option value="visitor">Посетитель</option>
                                  <option value="employer">Работодатель</option>
                                  <option value="partner">Партнер мероприятия</option>
                                </select>
                              </div>
                              <div>
                                <Label htmlFor="message">Дополнительная информация</Label>
                                <Textarea
                                  id="message"
                                  value={applicationForm.message}
                                  onChange={(e) => setApplicationForm({...applicationForm, message: e.target.value})}
                                />
                              </div>
                              <Button type="submit" className="w-full bg-primary">
                                Отправить заявку
                              </Button>
                            </form>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Contacts Tab */}
          <TabsContent value="contacts" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: 'PT Sans, sans-serif' }}>
                Контактная информация
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                Связаться с работниками Краевого кадрового центра
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {contacts.map((contact, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-primary flex items-center space-x-2" style={{ fontFamily: 'PT Sans, sans-serif' }}>
                      <Icon name="Building2" size={20} />
                      <span>{contact.department}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Icon name="User" size={16} className="text-government-orange" />
                      <span className="font-medium">{contact.responsible}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Phone" size={16} className="text-government-orange" />
                      <a href={`tel:${contact.phone}`} className="text-primary hover:underline">
                        {contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Mail" size={16} className="text-government-orange" />
                      <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
                        {contact.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-primary mb-4" style={{ fontFamily: 'PT Sans, sans-serif' }}>
                    Краевое государственное казенное учреждение<br />
                    "Краевой кадровый центр"
                  </h3>
                  <div className="space-y-2 text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    <p>📍 г. Ставрополь, ул. Ленина, 123</p>
                    <p>🕒 Режим работы: Пн-Пт 9:00-18:00</p>
                    <p>📧 info@stavkadry.ru</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Admin Panel Tab */}
          {isAdmin && (
            <TabsContent value="admin" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: 'PT Sans, sans-serif' }}>
                  Административная панель
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  Управление новостями и мероприятиями
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                {/* Add News Form */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Plus" size={20} />
                      <span>Добавить новость</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleAddNews} className="space-y-4">
                      <div>
                        <Label htmlFor="newsTitle">Заголовок *</Label>
                        <Input
                          id="newsTitle"
                          required
                          value={newsForm.title}
                          onChange={(e) => setNewsForm({...newsForm, title: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="newsContent">Содержание *</Label>
                        <Textarea
                          id="newsContent"
                          required
                          rows={4}
                          value={newsForm.content}
                          onChange={(e) => setNewsForm({...newsForm, content: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="newsTags">Теги (через запятую)</Label>
                        <Input
                          id="newsTags"
                          placeholder="Фестиваль, Молодежь, Профориентация"
                          value={newsForm.tags}
                          onChange={(e) => setNewsForm({...newsForm, tags: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="newsImage">URL изображения</Label>
                        <Input
                          id="newsImage"
                          placeholder="/img/example.jpg"
                          value={newsForm.image}
                          onChange={(e) => setNewsForm({...newsForm, image: e.target.value})}
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        <Icon name="Plus" size={16} className="mr-2" />
                        Добавить новость
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Add Event Form */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Calendar" size={20} />
                      <span>Добавить мероприятие</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleAddEvent} className="space-y-4">
                      <div>
                        <Label htmlFor="eventTitle">Название *</Label>
                        <Input
                          id="eventTitle"
                          required
                          value={eventForm.title}
                          onChange={(e) => setEventForm({...eventForm, title: e.target.value})}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="eventDate">Дата *</Label>
                          <Input
                            id="eventDate"
                            required
                            placeholder="15 августа 2024"
                            value={eventForm.date}
                            onChange={(e) => setEventForm({...eventForm, date: e.target.value})}
                          />
                        </div>
                        <div>
                          <Label htmlFor="eventTime">Время *</Label>
                          <Input
                            id="eventTime"
                            required
                            placeholder="10:00 - 16:00"
                            value={eventForm.time}
                            onChange={(e) => setEventForm({...eventForm, time: e.target.value})}
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="eventLocation">Место проведения *</Label>
                        <Input
                          id="eventLocation"
                          required
                          value={eventForm.location}
                          onChange={(e) => setEventForm({...eventForm, location: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="eventDescription">Описание *</Label>
                        <Textarea
                          id="eventDescription"
                          required
                          rows={3}
                          value={eventForm.description}
                          onChange={(e) => setEventForm({...eventForm, description: e.target.value})}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="eventType">Тип мероприятия *</Label>
                          <Input
                            id="eventType"
                            required
                            placeholder="Ярмарка вакансий"
                            value={eventForm.type}
                            onChange={(e) => setEventForm({...eventForm, type: e.target.value})}
                          />
                        </div>
                        <div>
                          <Label htmlFor="eventParticipants">Участников</Label>
                          <Input
                            id="eventParticipants"
                            type="number"
                            value={eventForm.participants}
                            onChange={(e) => setEventForm({...eventForm, participants: e.target.value})}
                          />
                        </div>
                      </div>
                      <Button type="submit" className="w-full">
                        <Icon name="Calendar" size={16} className="mr-2" />
                        Добавить мероприятие
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Statistics */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="BarChart3" size={20} />
                    <span>Статистика</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-government-gray rounded-lg">
                      <div className="text-2xl font-bold text-primary">{newsItems.length}</div>
                      <div className="text-sm text-gray-600">Новостей</div>
                    </div>
                    <div className="text-center p-4 bg-government-gray rounded-lg">
                      <div className="text-2xl font-bold text-primary">{events.length}</div>
                      <div className="text-sm text-gray-600">Мероприятий</div>
                    </div>
                    <div className="text-center p-4 bg-government-gray rounded-lg">
                      <div className="text-2xl font-bold text-secondary">{events.reduce((sum, event) => sum + event.participants, 0)}</div>
                      <div className="text-sm text-gray-600">Участников</div>
                    </div>
                    <div className="text-center p-4 bg-government-gray rounded-lg">
                      <div className="text-2xl font-bold text-secondary">24</div>
                      <div className="text-sm text-gray-600">Заявок</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          )}
        </Tabs>

        {/* Login Modal */}
        {showLogin && (
          <Dialog open={showLogin} onOpenChange={setShowLogin}>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle style={{ fontFamily: 'PT Sans, sans-serif' }}>
                  Вход в административную панель
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="adminUsername">Логин</Label>
                  <Input
                    id="adminUsername"
                    required
                    value={loginForm.username}
                    onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="adminPassword">Пароль</Label>
                  <Input
                    id="adminPassword"
                    type="password"
                    required
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                  />
                </div>
                <Alert>
                  <Icon name="Info" size={16} />
                  <AlertDescription>
                    Демо-доступ: admin / kkc2024
                  </AlertDescription>
                </Alert>
                <Button type="submit" className="w-full">
                  <Icon name="Lock" size={16} className="mr-2" />
                  Войти
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Building2" size={24} />
              <span className="text-lg font-bold">Профориентационная витрина</span>
            </div>
            <p className="text-sm opacity-90">
              © 2024 Краевое государственное казенное учреждение "Краевой кадровый центр"
            </p>
            <p className="text-xs opacity-75 mt-2">
              Ставропольский край • Профориентация • Карьерное развитие
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;